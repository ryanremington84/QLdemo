"use client";

import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar";
import {
  Badge
} from "@/components/ui/badge";
import {
  Button
} from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  Input
} from "@/components/ui/input";
import {
  Label
} from "@/components/ui/label";
import {
  Separator
} from "@/components/ui/separator";
import {
  Settings,
  Users,
  User,
  DollarSign,
  FileText,
  Activity,
  CreditCard,
  Building,
  Clock,
  AlertCircle
} from "lucide-react";
import { signOut } from "next-auth/react";
import { UserDocument } from "@/model/user";

interface SettingsProps {
  user: UserDocument;
}

export default function Setting({ user }: SettingsProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
    country: user.country || "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API to update user data
    console.log("Updated user data:", formData);
    setOpen(false);
  };

  const totalReports = user.companies.reduce((acc, company) => acc + company.reports.length, 0);
  const totalTasks = user.companies.reduce((acc, company) => acc + company.tasks.length, 0);
  const totalAgents = user.companies.reduce((acc, company) => acc + company.agents.length, 0);
  const totalTokens = user.companies.reduce((acc, company) => acc + company.token.balance, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:p-8">
      <div className="w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
          <p className="text-slate-600 mt-2">Manage your account settings and preferences</p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/50 backdrop-blur-md border border-slate-200 rounded-xl p-1 shadow-sm">
            <TabsTrigger
              value="profile"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-slate-900"
            >
              <User className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="companies"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-slate-900"
            >
              <Building className="w-4 h-4 mr-2" />
              Companies
            </TabsTrigger>
            <TabsTrigger
              value="agents"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-slate-900"
            >
              <Activity className="w-4 h-4 mr-2" />
              Agents
            </TabsTrigger>
            <TabsTrigger
              value="details"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-slate-900"
            >
              <Settings className="w-4 h-4 mr-2" />
              Details
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-3">
            <Card className="bg-white/50 backdrop-blur-md border border-slate-200 rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col items-center">
                    <Avatar className="w-32 h-32 mb-4 border-2 border-slate-200">
                      {user.avatarUrl ? (
                        <AvatarImage
                          src={user.avatarUrl}
                          alt={user.username}
                          className="object-cover"
                        />
                      ) : null}
                      <AvatarFallback className="bg-slate-100 text-slate-600">
                        {user.username.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setOpen(true)}
                      className="border-slate-300 hover:bg-slate-50"
                    >
                      Edit Profile
                    </Button>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-slate-900 mb-4">Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-slate-500 text-sm">Username</Label>
                        <p className="font-medium text-slate-900">{user.username}</p>
                      </div>
                      <div>
                        <Label className="text-slate-500 text-sm">Email</Label>
                        <p className="font-medium text-slate-900">{user.email}</p>
                      </div>
                      <div>
                        <Label className="text-slate-500 text-sm">Country</Label>
                        <p className="font-medium text-slate-900">{user.country || "Not specified"}</p>
                      </div>
                      <div>
                        <Label className="text-slate-500 text-sm">Currency</Label>
                        <p className="font-medium text-slate-900">{user.currency}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Button variant={'destructive'} className="w-full" onClick={() => signOut()}>
              Sign Out
            </Button>
          </TabsContent>

          <TabsContent value="companies">
            <Card className="bg-white/50 backdrop-blur-md border border-slate-200 rounded-xl shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Companies</h2>
                {user.companies.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {user.companies.map((company, index) => (
                      <Card
                        key={index}
                        className="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <h3 className="font-semibold text-slate-900">{company.name}</h3>
                            <Badge
                              variant={company.role === "Owner" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {company.role}
                            </Badge>
                          </div>
                          <Separator className="my-3 bg-slate-200" />
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-600">Agents</span>
                              <span className="font-medium">{company.agents.length}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-600">Tasks</span>
                              <span className="font-medium">{company.tasks.length}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-600">Reports</span>
                              <span className="font-medium">{company.reports.length}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500 py-8 text-center">No companies associated with your account</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="agents">
            <Card className="bg-white/50 backdrop-blur-md border border-slate-200 rounded-xl shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Agents</h2>
                {totalAgents > 0 ? (
                  <div className="space-y-4">
                    {user.companies.flatMap(company =>
                      company.agents.map((agent, index) => (
                        <Card
                          key={index}
                          className="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold text-slate-900">{agent.name}</h3>
                                <p className="text-sm text-slate-600 mt-1">{agent.subtitle}</p>
                                <p className="text-sm text-slate-700 mt-2">{agent.description}</p>
                              </div>
                              <Badge
                                variant={agent.overview.status === "Running" ? "default" : "secondary"}
                                className="text-xs"
                              >
                                {agent.overview.status}
                              </Badge>
                            </div>
                            <Separator className="my-3 bg-slate-200" />
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                              <div className="flex items-center text-sm">
                                <Clock className="w-4 h-4 mr-1 text-slate-500" />
                                <span className="text-slate-600">Completed:</span>
                                <span className="font-medium ml-1">{agent.overview.task.completed}</span>
                              </div>
                              <div className="flex items-center text-sm">
                                <AlertCircle className="w-4 h-4 mr-1 text-slate-500" />
                                <span className="text-slate-600">Success:</span>
                                <span className="font-medium ml-1">{agent.overview.task.successRate}%</span>
                              </div>
                              <div className="flex items-center text-sm">
                                <CreditCard className="w-4 h-4 mr-1 text-slate-500" />
                                <span className="text-slate-600">Tokens:</span>
                                <span className="font-medium ml-1">{agent.overview.tokensUsed}</span>
                              </div>
                              <div className="flex items-center text-sm">
                                <Activity className="w-4 h-4 mr-1 text-slate-500" />
                                <span className="text-slate-600">Tasks:</span>
                                <span className="font-medium ml-1">{agent.tasks.length}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    )}
                  </div>
                ) : (
                  <p className="text-slate-500 py-8 text-center">No agents created yet</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="details">
            <Card className="bg-white/50 backdrop-blur-md border border-slate-200 rounded-xl shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Account Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-lg shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-600">Total Reports</p>
                          <p className="text-2xl font-bold text-slate-900">{totalReports}</p>
                        </div>
                        <FileText className="w-8 h-8 text-slate-500" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-lg shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-600">Total Tasks</p>
                          <p className="text-2xl font-bold text-slate-900">{totalTasks}</p>
                        </div>
                        <Activity className="w-8 h-8 text-slate-500" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-lg shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-600">Total Agents</p>
                          <p className="text-2xl font-bold text-slate-900">{totalAgents}</p>
                        </div>
                        <Users className="w-8 h-8 text-slate-500" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Separator className="my-6 bg-slate-200" />

                <h3 className="font-semibold text-slate-900 mb-4">Billing & Tokens</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-lg shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-600">Available Tokens</p>
                          <p className="text-2xl font-bold text-slate-900">{totalTokens}</p>
                        </div>
                        <CreditCard className="w-8 h-8 text-slate-500" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-lg shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-600">Account Balance</p>
                          <p className="text-2xl font-bold text-slate-900">{user.currency} {user.money.toFixed(2)}</p>
                        </div>
                        <DollarSign className="w-8 h-8 text-slate-500" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md bg-white/50 backdrop-blur-md border border-slate-200 rounded-xl shadow-sm">
          <DialogHeader>
            <DialogTitle className="text-slate-900">Edit Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="username" className="text-slate-700">Username</Label>
              <Input
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="bg-white/30 backdrop-blur-sm border-slate-200 text-slate-900"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-slate-700">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-white/30 backdrop-blur-sm border-slate-200 text-slate-900"
              />
            </div>
            <div>
              <Label htmlFor="country" className="text-slate-700">Country</Label>
              <Input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="bg-white/30 backdrop-blur-sm border-slate-200 text-slate-900"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-slate-800 hover:bg-slate-900 text-white"
            >
              Save Changes
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
