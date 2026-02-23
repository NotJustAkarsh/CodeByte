"use client";
import React, {
  FormEvent,
  startTransition,
  useActionState,
  useState,
} from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import "react-quill-new/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";
import { Articles } from "@/generated/prisma/client";
import Image from "next/image";
import { editArticle } from "@/actions/edit-article";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

type EditArticleProps = {
  article: Articles;
};

const EditArticlePage: React.FC<EditArticleProps> = ({ article }) => {
  const [content, setContent] = useState(article.content);
  const [formState, action, isPending] = useActionState(
    editArticle.bind(null, article.id),
    {
      errors: {},
    },
  );

  console.log("formstate ==>", formState);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    formData.append("content", content);

    startTransition(() => {
      action(formData);
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New Article</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}  className="space-y-6">
            <div className="space-y-2">
              <Input
                type="text"
                name="title"
                defaultValue={article.title}
                placeholder="Enter Article Title"
              />
              {formState.errors.title && (
                <span className="text-red-600 text-sm">
                  {formState.errors.title}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Select name="category" defaultValue={article.category}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="programming">Programming</SelectItem>
                    <SelectItem value="web-development">
                      Web Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {formState.errors.category && (
                <span className="text-red-600 text-sm">
                  {formState.errors.category}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="featuredImage">Featured Image</Label>
              <Input
                type="file"
                id="featuredImage"
                name="featuredImage"
                accept="image/*"
              />
              <div className="relative w-full h-64">
                <Image
                  src={article.featuredImage}
                  alt="featured image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Content</Label>
              <ReactQuill theme="snow" value={content} onChange={setContent} />
              {formState.errors.content && (
                <span className="text-red-600 text-sm">
                  {formState.errors.content}
                </span>
              )}
            </div>
            <div className="flex justify-end gap-4">
              <Button type="submit" variant={"outline"}>
                Cancel
              </Button>
              <Button disabled={isPending} type="submit">
                {isPending ? "Loading..." : "Update Article"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditArticlePage;
