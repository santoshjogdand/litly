import React, { useState } from "react";
import UpdateLinkModal from "./UpdateLinkModal";
import ErrorBoundary from "./ErrorBoundary";
import ShareModal from "./ShareModal";

const Favicon = ({ url }) => {
  try {
    const hostname = new URL(url).hostname;
    return (
      <img
        className="w-5 h-5 object-contain"
        src={`https://www.google.com/s2/favicons?sz=64&domain=${hostname}`}
        alt="favicon"
      />
    );
  } catch (err) {
    throw new Error(`Invalid URL: ${url}`);
  }
};

function LinkComponent({ urls, updateLink, deleteLink }) {
  const [checked, setChecked] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setChecked((prev) => [...prev, value]);
    } else {
      setChecked((prev) => prev.filter((item) => item !== value));
    }
  };

  if (!urls) return <div className="loading">Loading...</div>;
  if (urls.length === 0) return <div>No URLs found.</div>;

  return (
    <>
      {showUpdateModal && (
        <UpdateLinkModal
          url={selectedUrl}
          setShowUpdateModal={setShowUpdateModal}
          updateLink={updateLink}
        />
      )}
    {showShareModal && (
        <ShareModal
          url={selectedUrl}
          setShowShareModal={setShowShareModal}
        />
      )}

      {urls.map((url) => (
        <div
          key={url._id}
          className="my-5 bg-white w-full flex flex-col rounded-xl font-medium p-8 gap-4 ring-2 ring-purple-500/50 hover:ring-purple-500"
        >
          <div className="flex flex-col lg:flex-row lg:gap-5 gap-5">
            <div className="container flex lg:gap-5 gap-2">
              <input
                type="checkbox"
                value={`http://localhost/${url.shortCode}`}
                className="w-4 h-4 text-gray-600"
                onChange={handleChange}
              />

              <div className="logo h-8 w-9 rounded-full flex justify-center items-center">
                <ErrorBoundary>
                  <Favicon url={url.originalUrl} />
                </ErrorBoundary>
              </div>

              <div className="links flex lg:flex-row flex-col gap-4 w-full">
                <div className="innerHead w-full flex flex-col justify-between lg:gap-0 gap-2">
                  <h2 className="lg:text-3xl text-2xl">
                    {!url.title ? "Unnamed" : url.title}
                  </h2>
                  <div className="shortenLink flex flex-col">
                    <a
                      href={`http://localhost/${url.shortCode}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-purple-600 font-medium w-fit"
                    >
                      {`http://localhost/${url.shortCode}`}
                    </a>
                    <a
                      href={url.originalUrl}
                      className="text-gray-600 font-normal w-full truncate mr-4"
                    >
                      {url.originalUrl}
                    </a>
                  </div>
                  <div className="flex md:flex-row flex-col lg:gap-5 gap-2 font-medium lg:text-sm text-sm text-gray-700 mt-2">
                    <span>Visits {url.clickCount}</span>
                    <span>More analytics</span>
                    <span>{new Date(url.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="innerOptions flex justify-center items-center lg:gap-5 gap-2 lg:h-10 text-sm">
              <button
                value={`http://localhost/${url.shortCode}`}
                onClick={async (e) => {
                  await navigator.clipboard.writeText(e.target.value);
                  e.target.textContent = "Copied";
                  setTimeout(() => {
                    e.target.textContent = "Copy";
                  }, 3000);
                }}
                className="lg:px-3 px-2 py-1 border border-gray-300 rounded-lg cursor-pointer"
              >
                Copy
              </button>

              <button 
              onClick={() => {
                  setSelectedUrl(url);
                  setShowShareModal(true);
                }}
              className="lg:px-3 px-2 py-1 border border-gray-300 rounded-lg cursor-pointer">
                Share
              </button>

              <button
                onClick={() => {
                  setSelectedUrl(url);
                  setShowUpdateModal(true);
                }}
                className="lg:px-3 px-2 py-1 border border-gray-300 rounded-lg cursor-pointer"
              >
                Edit
              </button>

              <button
                onClick={() => deleteLink(url._id)}
                className="lg:px-3 px-2 py-1 border border-gray-300 rounded-lg cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default LinkComponent;
