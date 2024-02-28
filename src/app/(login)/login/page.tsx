import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "@/components/LoginForm/LoginForm";

export default function LoginPage() {
    return (
        <div className="max-w-6xl flex justify-center items-center min-h-screen mx-auto">
            <Card className="w-[450px] mx-auto">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                        Enter your account to access Dashboard page.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
            </Card>
        </div>
    )
}
