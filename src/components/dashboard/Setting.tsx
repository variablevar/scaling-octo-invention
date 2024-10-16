import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function SettingsScreen() {
  return (
    <div className="flex h-screen bg-[#f5f5f5]">
      <div className="hidden md:block"></div>
      <main className="flex-1 overflow-auto">
        <div className="p-4 md:p-6">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold">Settings</h2>
            <div className="md:hidden"></div>
          </div>
          <Tabs defaultValue="sending-message" className="space-y-4">
            <TabsList className="flex flex-wrap">
              <TabsTrigger value="sending-message">Sending Message</TabsTrigger>
              <TabsTrigger value="sleep-mode">Sleep Mode</TabsTrigger>
              <TabsTrigger value="sending-media">Sending Media</TabsTrigger>
              <TabsTrigger value="welcome-media">Welcome Media</TabsTrigger>
              <TabsTrigger value="country-language">
                Country & Language
              </TabsTrigger>
              <TabsTrigger value="unsubscribe">Unsubscribe</TabsTrigger>
              <TabsTrigger value="storage">Storage</TabsTrigger>
              <TabsTrigger value="others">Others</TabsTrigger>
            </TabsList>
            <TabsContent value="sending-message">
              <Card>
                <CardHeader>
                  <CardTitle>Sending Message Settings</CardTitle>
                  <CardDescription>
                    Configure your message sending preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="delay-between-messages">
                      Delay Between Messages (seconds)
                    </Label>
                    <Input
                      id="delay-between-messages"
                      type="number"
                      className="w-20"
                      defaultValue="1"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="max-concurrent-messages">
                      Max Concurrent Messages
                    </Label>
                    <Input
                      id="max-concurrent-messages"
                      type="number"
                      className="w-20"
                      defaultValue="5"
                    />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="sleep-mode">
              <Card>
                <CardHeader>
                  <CardTitle>Sleep Mode Settings</CardTitle>
                  <CardDescription>
                    Configure sleep mode to pause message sending during
                    specific hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="enable-sleep-mode">Enable Sleep Mode</Label>
                    <Switch id="enable-sleep-mode" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sleep-start">Sleep Start Time</Label>
                      <Input id="sleep-start" type="time" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sleep-end">Sleep End Time</Label>
                      <Input id="sleep-end" type="time" />
                    </div>
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="sending-media">
              <Card>
                <CardHeader>
                  <CardTitle>Sending Media Settings</CardTitle>
                  <CardDescription>
                    Configure settings for sending media files.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="max-file-size">Max File Size (MB)</Label>
                    <Input
                      id="max-file-size"
                      type="number"
                      className="w-20"
                      defaultValue="10"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="allowed-file-types">
                      Allowed File Types
                    </Label>
                    <Input
                      id="allowed-file-types"
                      placeholder="jpg, png, pdf"
                    />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="welcome-media">
              <Card>
                <CardHeader>
                  <CardTitle>Welcome Media Settings</CardTitle>
                  <CardDescription>
                    Configure media to be sent with welcome messages.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="enable-welcome-media">
                      Enable Welcome Media
                    </Label>
                    <Switch id="enable-welcome-media" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="welcome-media-upload">
                      Upload Welcome Media
                    </Label>
                    <Input id="welcome-media-upload" type="file" />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="country-language">
              <Card>
                <CardHeader>
                  <CardTitle>Country & Language Settings</CardTitle>
                  <CardDescription>
                    Set your preferred country and language options.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="default-country">Default Country</Label>
                    <Select>
                      <SelectTrigger id="default-country">
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        {/* Add more countries as needed */}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="default-language">Default Language</Label>
                    <Select>
                      <SelectTrigger id="default-language">
                        <SelectValue placeholder="Select a language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        {/* Add more languages as needed */}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="unsubscribe">
              <Card>
                <CardHeader>
                  <CardTitle>Unsubscribe Settings</CardTitle>
                  <CardDescription>
                    Configure unsubscribe options for your contacts.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="enable-unsubscribe">
                      Enable Unsubscribe Option
                    </Label>
                    <Switch id="enable-unsubscribe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="unsubscribe-keyword">
                      Unsubscribe Keyword
                    </Label>
                    <Input id="unsubscribe-keyword" placeholder="e.g., STOP" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="unsubscribe-message">
                      Unsubscribe Confirmation Message
                    </Label>
                    <Textarea
                      id="unsubscribe-message"
                      placeholder="Enter the message to send when a user unsubscribes"
                    />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="storage">
              <Card>
                <CardHeader>
                  <CardTitle>Storage Settings</CardTitle>
                  <CardDescription>
                    Manage your storage preferences and limits.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="max-storage">Maximum Storage (GB)</Label>
                    <Input
                      id="max-storage"
                      type="number"
                      className="w-20"
                      defaultValue="5"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="auto-delete">
                      Auto-delete old messages
                    </Label>
                    <Switch id="auto-delete" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="delete-after">
                      Delete messages older than (days)
                    </Label>
                    <Input id="delete-after" type="number" defaultValue="30" />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="others">
              <Card>
                <CardHeader>
                  <CardTitle>Other Settings</CardTitle>
                  <CardDescription>
                    Additional configuration options.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="enable-notifications">
                      Enable Notifications
                    </Label>
                    <Switch id="enable-notifications" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                    <Switch id="dark-mode" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="api-key">API Key</Label>
                    <Input id="api-key" type="password" />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
