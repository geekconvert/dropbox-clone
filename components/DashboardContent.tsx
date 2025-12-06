"use client";

import { useState, useCallback, useEffect } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Tabs, Tab } from "@heroui/tabs";
import { FileUp, FileText, User } from "lucide-react";
import FileUploadForm from "@/components/FileUploadForm";
import FileList from "@/components/FileList";
import UserProfile from "@/components/UserProfile";
import { useSearchParams } from "next/navigation";

interface DashboardContentProps {
  userId: string;
  userName: string;
}

export default function DashboardContent({
  userId,
  userName,
}: DashboardContentProps) {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState<string>(() =>
    tabParam === "profile" ? "profile" : "files"
  );
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);

  // Set the active tab based on URL parameter
  useEffect(() => {
    const nextTab = tabParam === "profile" ? "profile" : "files";
    setActiveTab((prev) => (prev === nextTab ? prev : nextTab));
  }, [tabParam]);

  const handleFileUploadSuccess = useCallback(() => {
    setRefreshTrigger((prev) => prev + 1);
  }, []);

  const handleFolderChange = useCallback((folderId: string | null) => {
    setCurrentFolder(folderId);
  }, []);

  return (
    <>
      <div className="mb-8 rounded-3xl border border-white/60 bg-white/80 px-6 py-6 shadow-lg shadow-slate-200/60 backdrop-blur-md">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-2">
          Dashboard
        </p>
        <h2 className="text-4xl font-semibold text-slate-900">
          Hi,{" "}
          <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            {userName?.length > 10
              ? `${userName?.substring(0, 10)}...`
              : userName?.split(" ")[0] || "there"}
          </span>
          !
        </h2>
        <p className="text-slate-600 mt-2 text-lg">
          Your images are waiting for you.
        </p>
      </div>

      <Tabs
        aria-label="Dashboard Tabs"
        color="primary"
        variant="solid"
        selectedKey={activeTab}
        onSelectionChange={(key) => setActiveTab(key as string)}
        classNames={{
          tabList:
            "gap-3 bg-white/80 border border-white/60 shadow-sm shadow-slate-100 rounded-2xl p-2",
          tab: "px-4 py-3 rounded-xl text-slate-700 data-[selected=true]:text-white",
          cursor: "bg-gradient-to-r from-sky-500 to-indigo-600",
        }}
      >
        <Tab
          key="files"
          title={
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5" />
              <span className="font-medium">My Files</span>
            </div>
          }
        >
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <Card className="border border-white/60 bg-white/80 shadow-lg shadow-slate-200/70 backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-xl">
                <CardHeader className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                    <FileUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">
                      Upload
                    </h2>
                    <p className="text-sm text-slate-500">
                      Drag-and-drop or start a new folder.
                    </p>
                  </div>
                </CardHeader>
                <CardBody>
                  <FileUploadForm
                    userId={userId}
                    onUploadSuccess={handleFileUploadSuccess}
                    currentFolder={currentFolder}
                  />
                </CardBody>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card className="border border-white/60 bg-white/80 shadow-lg shadow-slate-200/70 backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-xl">
                <CardHeader className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">
                      Your Files
                    </h2>
                    <p className="text-sm text-slate-500">
                      Browse, star, or manage your uploads.
                    </p>
                  </div>
                </CardHeader>
                <CardBody>
                  <FileList
                    userId={userId}
                    refreshTrigger={refreshTrigger}
                    onFolderChange={handleFolderChange}
                  />
                </CardBody>
              </Card>
            </div>
          </div>
        </Tab>

        <Tab
          key="profile"
          title={
            <div className="flex items-center gap-3">
              <User className="h-5 w-5" />
              <span className="font-medium">Profile</span>
            </div>
          }
        >
          <div className="mt-8">
            <UserProfile />
          </div>
        </Tab>
      </Tabs>
    </>
  );
}
