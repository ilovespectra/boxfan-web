import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Download from GitHub raw content
    const githubUrl = 'https://raw.githubusercontent.com/ilovespectra/BoxFan/main/app/build/outputs/apk/debug/app-debug.apk';
    
    const response = await fetch(githubUrl);
    
    if (!response.ok) {
      throw new Error(`GitHub returned ${response.status}`);
    }

    const buffer = await response.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/vnd.android.package-archive',
        'Content-Disposition': 'attachment; filename="BoxFan.apk"',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: 'Failed to download APK' },
      { status: 500 }
    );
  }
}
