import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Edit2, LogOut, QrCode, Trash2 } from "lucide-react";
import { useState } from "react";

export default function DevicesPage() {
  const [isQRVisible, setIsQRVisible] = useState(false);

  return (
    <main className="flex-1 p-8 overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Devices</h3>
        <div className="space-x-2">
          <Button variant="outline">Bulk Profile Update</Button>
          <Button>Create Instance</Button>
        </div>
      </div>

      <Card className="bg-gray-200 p-4">
        <CardContent className="p-0">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">918128287970 - rkb</p>
              <div className="flex items-center text-green-500">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                Ready
              </div>
              <p className="text-sm text-gray-600">rathoredharmendra937</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsQRVisible(!isQRVisible)}
              >
                <QrCode className="w-4 h-4 mr-2" />
                QR
              </Button>
              <Button variant="outline" size="sm">
                <Edit2 className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button variant="outline" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>
          {isQRVisible && (
            <div className="mt-4 p-4 bg-white rounded-lg">
              <p className="text-center mb-2">Scan this QR code to connect</p>
              <div className="w-48 h-48 mx-auto bg-gray-300 flex items-center justify-center">
                QR Code Placeholder
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
