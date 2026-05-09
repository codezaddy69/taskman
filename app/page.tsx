import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Today</h1>
        <p className="text-muted-foreground">Your daily overview at a glance</p>
      </div>

      {/* Today Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Daily Quest */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Today's Quest</CardTitle>
                <Badge variant="secondary">Main Quest</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Complete 3 high-priority tasks and organize your workspace to earn bonus XP!
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent-foreground" style={{ width: "66%" }} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">2/3 tasks</p>
                </div>
                <div className="flex-1">
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: "100%" }} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Workspace organized</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Timeline</CardTitle>
              <CardDescription>Your events and tasks for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-16 text-sm text-muted-foreground">9:00 AM</div>
                  <div className="flex-1 bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                    <p className="text-sm font-medium text-foreground">Team Standup</p>
                    <p className="text-xs text-purple-200">9:00 - 10:00 AM</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-16 text-sm text-muted-foreground">10:30 AM</div>
                  <div className="flex-1 bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">Review TaskMan design</p>
                        <p className="text-xs text-blue-200">Task • 30 minutes</p>
                      </div>
                      <Badge variant="secondary">Priority 2</Badge>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: "40%" }} />
                      </div>
                      <p className="text-xs text-muted-foreground">40% complete</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-16 text-sm text-muted-foreground">2:00 PM</div>
                  <div className="flex-1 bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">Deep work session</p>
                        <p className="text-xs text-orange-200">Task • 2 hours</p>
                      </div>
                      <Badge variant="warning">High Energy</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Tasks */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Upcoming Tasks</CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Task
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-4 p-3 bg-card rounded-lg border border-input hover:border-accent/50 transition-colors">
                  <input type="checkbox" className="mt-1 h-4 w-4" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-foreground">Prepare for Rizz development</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">Priority 1</Badge>
                      <Badge variant="secondary">Career</Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 bg-card rounded-lg border border-input hover:border-accent/50 transition-colors">
                  <input type="checkbox" className="mt-1 h-4 w-4" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-foreground">Review Cactus AI strategies</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="warning">Priority 2</Badge>
                      <Badge variant="secondary">Career</Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 bg-card rounded-lg border border-input hover:border-accent/50 transition-colors">
                  <input type="checkbox" className="mt-1 h-4 w-4" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-foreground">30-minute exercise session</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Priority 3</Badge>
                      <Badge variant="success">Health</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Gamification */}
        <div className="space-y-6">
          {/* Level & XP */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Level & XP</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center border-4 border-purple-300">
                    <span className="text-lg font-bold text-white">12</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Level 12</p>
                    <p className="text-xs text-muted-foreground">Productivity Master</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-foreground">XP Progress</span>
                    <span className="text-sm text-muted-foreground">2,450 / 3,000</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent-foreground transition-all duration-500" style={{ width: "82%" }} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">550 XP to Level 13</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 5 Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Your Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-full bg-blue-500" />
                      <span className="text-sm font-medium text-foreground">Mind</span>
                    </div>
                    <span className="text-sm text-blue-500">78/100</span>
                  </div>
                  <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: "78%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-full bg-green-500" />
                      <span className="text-sm font-medium text-foreground">Health</span>
                    </div>
                    <span className="text-sm text-green-500">65/100</span>
                  </div>
                  <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 transition-all duration-500" style={{ width: "65%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-full bg-pink-500" />
                      <span className="text-sm font-medium text-foreground">Spirit</span>
                    </div>
                    <span className="text-sm text-pink-500">92/100</span>
                  </div>
                  <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-pink-500 transition-all duration-500" style={{ width: "92%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-full bg-purple-500" />
                      <span className="text-sm font-medium text-foreground">Career</span>
                    </div>
                    <span className="text-sm text-purple-500">85/100</span>
                  </div>
                  <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 transition-all duration-500" style={{ width: "85%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-full bg-orange-500" />
                      <span className="text-sm font-medium text-foreground">Home</span>
                    </div>
                    <span className="text-sm text-orange-500">70/100</span>
                  </div>
                  <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 transition-all duration-500" style={{ width: "70%" }} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Streaks */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Streaks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-foreground">🔥 Daily</span>
                    <div className="h-5 w-5 rounded-full bg-orange-500 animate-pulse" />
                  </div>
                  <span className="text-sm font-semibold text-orange-500">12 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-foreground">📅 Weekly</span>
                    <div className="h-5 w-5 rounded-full bg-blue-500 animate-pulse" />
                  </div>
                  <span className="text-sm font-semibold text-blue-500">3 weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-foreground">🗓️ Monthly</span>
                    <div className="h-5 w-5 rounded-full bg-purple-500 animate-pulse" />
                  </div>
                  <span className="text-sm font-semibold text-purple-500">2 months</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 bg-card rounded-lg border border-input">
                  <div className="h-10 w-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <span className="text-lg">🏆</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">First Week Master</p>
                    <p className="text-xs text-muted-foreground">Complete all daily quests for 7 days</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 bg-card rounded-lg border border-input">
                  <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <span className="text-lg">⚡</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Streak Master</p>
                    <p className="text-xs text-muted-foreground">Maintain a 30-day streak</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 bg-card rounded-lg border border-input">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-lg">💪</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Level Up</p>
                    <p className="text-xs text-muted-foreground">Reach level 10</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
