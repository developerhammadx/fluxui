import { NextResponse } from "next/server";
import { getAllPosts, getPostById } from "@/lib/data/posts";

export const dynamic = "force-static";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    // If ID is provided, return single post
    if (id) {
      const post = getPostById(id);
      
      if (!post) {
        return NextResponse.json({
          success: false,
          error: "Post not found",
          message: `No post found with ID: ${id}`
        }, {
          status: 404
        });
      }
      
      return NextResponse.json({
        success: true,
        data: post
      }, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=3600"
        }
      });
    }
    
    // Otherwise return all posts
    const posts = getAllPosts();
    
    return NextResponse.json({
      success: true,
      count: posts.length,
      data: posts
    }, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600"
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
