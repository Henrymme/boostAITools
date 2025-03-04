import { client } from "./sanity";

export async function fetchFilterToolsData({search, categories}: {search:string, categories: string[]}) {
  try {
    const query = ` *[_type == "project" 
                  && (name match "*${search}*" || tags[] match "*${search}*" || description match "*${search}*" || priceMode match "*${search}*") 
                  ${categories.length > 0 ? `&& (count(tags[@ in [${categories.map(c => `"${c}"`).join(", ")}]]) > 0)` : ""}
                  ] | order(_createdAt desc) {
                  name,
                  _id,
                  description,
                  priceMode,
                  tags,
                  link,
                  "imageUrl": image.asset->url
                  }
                  `;

    const data = await client.fetch(query);
    console.log("data", data)
    console.log("categories", categories)
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
}
export async function fetchToolsData() {
  try {
    const query = ` *[_type == "project"]{
                  name,
                  _id,
                  description,
                  priceMode,
                  tags,
                  link,
                  "imageUrl": image.asset->url
                  }
                  `;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
}

export const mainCategories = [
  "Generative Code",
  "Generative Video",
  "Image Improvement",
  "Marketing",
  "Music",
  "Productivity",
  "Prompt Guides",
  "Social Media",
  "Speech-To-Text",
  "Text-To-Speech",
  "Text-To-Video",
  "Translation",
  "Video Editing",
  "Freemium"
]

export const categories = [
    "AI Detection",
    "Aggregators",
    "Avatar",
    "Chat",
    "Copywriting",
    "Finance",
    "Gaming",
    "Generative Art",
    "Generative Code",
    "Generative Video",
    "Image Improvement",
    "Image Scanning",
    "Marketing",
    "Motion Capture",
    "Music",
    "Podcasting",
    "Productivity",
    "Prompt Guides",
    "Research",
    "Self-Improvement",
    "Social Media",
    "Speech-To-Text",
    "Text-To-Speech",
    "Text-To-Video",
    "Translation",
    "Video Editing",
    "Voice Modulation",
    "Free",
    "Freemium",
    "GitHub",
    "Paid"
  ]
