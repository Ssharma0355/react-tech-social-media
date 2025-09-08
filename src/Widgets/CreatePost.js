import React, { useState } from "react";
import { Image, Video, Paperclip, X } from "lucide-react"; // optional (lucide-react icons)

const CreatePost = ({
  profileImage = "/",
  placeholder = "What's on your mind?",
  onPost,
}) => {
  const [content, setContent] = useState("");
  const [media, setMedia] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setMedia(file);
  };

  const handleRemoveMedia = () => setMedia(null);

  const handlePost = () => {
    if (content.trim() === "" && !media) return;

    if (onPost) {
      const postData = { text: content, media };
      onPost(postData);
    }

    setContent("");
    setMedia(null);
  };

  return (
    <div className="flex flex-col p-4 rounded-lg mb-6 mt-6 border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* Profile Image */}
        <div className="w-12 h-12 rounded-full border border-gray-300 overflow-hidden">
          <img
            src={profileImage}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col w-full">
          {/* Textarea */}
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-blue-400"
            rows="3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={placeholder}
          ></textarea>

          {/* Media Preview */}
          {media && (
            <div className="relative mt-3 w-fit">
              {media.type.startsWith("image") ? (
                <img
                  src={URL.createObjectURL(media)}
                  alt="preview"
                  className="w-40 h-40 object-cover rounded-lg border"
                />
              ) : media.type.startsWith("video") ? (
                <video
                  src={URL.createObjectURL(media)}
                  controls
                  className="w-60 h-40 rounded-lg border"
                />
              ) : (
                <p className="text-sm text-gray-600">{media.name}</p>
              )}
              <button
                onClick={handleRemoveMedia}
                className="absolute -top-2 -right-2 bg-gray-800 text-white p-1 rounded-full hover:bg-red-500"
              >
                <X size={14} />
              </button>
            </div>
          )}

          {/* File Upload Buttons */}
          <div className="flex gap-4 mt-3 items-center text-gray-600">
            <label className="cursor-pointer flex items-center gap-1 hover:text-blue-500">
              <Image size={18} />
              <span className="text-sm">Photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            <label className="cursor-pointer flex items-center gap-1 hover:text-blue-500">
              <Video size={18} />
              <span className="text-sm">Video</span>
              <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            <label className="cursor-pointer flex items-center gap-1 hover:text-blue-500">
              <Paperclip size={18} />
              <span className="text-sm">File</span>
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Post Button */}
      <div className="flex justify-end mt-3">
        <button
          onClick={handlePost}
          className="bg-[#4CAF50] text-white px-4 py-2 rounded-lg hover:bg-[#68cb6b] transition"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
