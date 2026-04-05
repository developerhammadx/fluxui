import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/data/posts";

export const dynamic = "force-static";

export async function GET() {
  try {
    const posts = getAllPosts();
    
    return NextResponse.json({
      success: true,
      count: posts.length,
      data: posts
    }, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600" // Cache for 1 hour
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Failed to fetch posts",
      message: error instanceof Error ? error.message : "Unknown error"
    }, {
      status: 500
    });
  }
}
