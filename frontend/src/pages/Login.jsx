import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const res = await API.post("/auth/login", { email, password });
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            navigate("/");
        } catch (err) {
            setError(err.response?.data?.error || "Login Failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-md shadow">
                <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
                {error && <div className="text-sm text-red-600 mb-3">{error}</div>}
                <form onSubmit={submit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <Input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full border px-3 py-2 rounded" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <Input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full border px-3 py-2 rounded" required />
                    </div>
                    <Button className="w-full py-2 bg-blue-600 text-white rounded">Login</Button>
                </form>
                <div>
                    <a href="/reset-password" className="text-blue-600">Forget Password</a>
                </div>
            </div>
        </div>
    );
}