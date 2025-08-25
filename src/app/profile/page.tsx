import BottomWhiteContainer from "@/ui/commons/BottomWhiteContainer";
import TopBar from "@/ui/commons/TopBar";
import UserDetails from "@/ui/profile/UserDetails";

export default function ProfilePage() {
  return (
    <main className="h-full flex flex-col min-h-0 justify-start space-y-4 pt-4 pb-0 max-h-screen">
      <TopBar title="Profile" onBack={true} />
      <BottomWhiteContainer className="flex-1 flex flex-col min-h-0">
        <UserDetails />
      </BottomWhiteContainer>
    </main>
  );
}