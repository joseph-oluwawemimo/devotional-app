#!/usr/bin/env node

/**
 * GOFAMINT Sunday School App - Download Statistics Tracker
 * 
 * Fetches real-time download counts directly from GitHub Releases API
 * across all published versions of the APK.
 */

import { execSync } from 'child_process';

async function fetchStats() {
  console.log('\n========================================================');
  console.log('  📱 GOFAMINT SUNDAY SCHOOL - APK DOWNLOAD METRICS');
  console.log('========================================================\n');

  try {
    let releasesRaw = '';
    
    // Check if gh CLI is available and authenticated
    try {
      releasesRaw = execSync('gh api repos/joseph-oluwawemimo/GOFAMINT-Sunday-School/releases', {
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'pipe']
      });
    } catch {
      // Fallback to fetch if GITHUB_TOKEN is present in environment
      const token = process.env.GITHUB_TOKEN;
      const headers = {
        'User-Agent': 'GOFAMINT-Stats-Tracker',
        'Accept': 'application/vnd.github.v3+json'
      };
      if (token) {
        headers['Authorization'] = `token ${token}`;
      }
      
      const res = await fetch('https://api.github.com/repos/joseph-oluwawemimo/GOFAMINT-Sunday-School/releases', { headers });
      if (!res.ok) {
        throw new Error(`GitHub API returned status ${res.status}: ${res.statusText}`);
      }
      releasesRaw = await res.text();
    }

    const releases = JSON.parse(releasesRaw);
    if (!Array.isArray(releases) || releases.length === 0) {
      console.log('No published releases found yet.');
      return;
    }

    let totalDownloads = 0;
    const statsTable = [];

    releases.forEach((release) => {
      const tag = release.tag_name || 'unknown';
      const publishedDate = release.published_at 
        ? new Date(release.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
        : 'N/A';
      
      (release.assets || []).forEach((asset) => {
        const sizeMb = (asset.size / (1024 * 1024)).toFixed(1);
        const count = asset.download_count || 0;
        totalDownloads += count;

        statsTable.push({
          'Version': tag,
          'File': asset.name,
          'Size': `${sizeMb} MB`,
          'Downloads': count,
          'Released': publishedDate
        });
      });
    });

    console.table(statsTable);
    console.log('--------------------------------------------------------');
    console.log(`  🎉 TOTAL DOWNLOADS ACROSS ALL RELEASES: ${totalDownloads}`);
    console.log('========================================================\n');

    return { totalDownloads, releases: statsTable };
  } catch (error) {
    console.error('❌ Failed to fetch download stats:', error.message);
    console.log('\nTip: Make sure you are logged into GitHub CLI (`gh auth login`) or have access to the repository.\n');
  }
}

fetchStats();
