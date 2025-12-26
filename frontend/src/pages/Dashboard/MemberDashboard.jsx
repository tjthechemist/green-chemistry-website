import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Users, Upload, Trash2 } from "lucide-react";


export default function MemberDashboard({ groupId, onCreated }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        researchTopic: "",
        position: "",
        bio: "",
        photo: null,
    });

    const [members, setMembers] = useState([]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm({ ...form, [name]: files ? files[0]: value });
    };

    const addMember = () =>  {
        const newMember = {
            id: members.length + 1,
            name: form.name,
            email: form.email,
            researchTopic: form.researchTopic,
            position: form.position,
            bio: form.bio,
            photo: form.photo ? URL.createObjectURL(form.photo) : "https://via.placeholder.com/80",
        };

        setMembers([newMember, ...members]);
        setForm({
            name: form.name ? form.name: "",
            email: form.email ? form.email: "",
            researchTopic: form.researchTopic ? form.researchTopic: "",
            position: form.position ? form.position : "",
            bio: form.bio ? form.bio : "",
            photo: form.photo ? URL.createObjectURL(form.photo) : "https://via.placeholder.com/80",
        });
    };

    const deleteMember = (id) => {
        setMembers(members.filter((m) => m.id !== id));
    };

    return (
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="col-span-1 shadow-lg rounded-2xl">
                <CardContent className="p-6 space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2"><Users size={20} />Add New Member</h2>
                    <Input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
                    <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                    <Input name="researchTopic" placeholder="Research Topic" value={form.researchTopic} onChange={handleChange} />
                    <Input name="position" placeholder="Position" value={form.position} onChange={handleChange} />
                    <Textarea name="bio" placeholder="Short Bio" value={form.bio} onChange={handleChange} />
                    <div className="border rounded-xl p-4 flex flex-col items-center text-center hover:bg-gray-50 cursor-pointer">
                        <Upload className="mb-2" />
                        <Input type="file" name="photo" onChange={handleChange} />
                        <p className="text-sm mt-1">Upload Photo</p>
                    </div>
                    <Button className="w-full flex items-center gap-2" onClick={addMember}><Plus size={18} />Add Member</Button>
               </CardContent>
            </Card>

            <Card className="col-span-2 shadow-lg rounded-2xl">
                <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Current Members</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {members.map((m) => (
                            <Card key={m.id} className="rounded-xl shadow p-4 flex gap-4 items-start">
                                <img src={m.photo} className="w-20 h-20 rounded-xl object-cover" />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg">{m.name}</h3>
                                    <p className="text-sm text-gray-600">{m.position}</p>
                                    <p className="text-sm text-gray-600">Research Topic: {m.researchTopic}</p>
                                </div>
                                <Button variant="destructive" size="icon" className="rounded0-full" onClick={() => deleteMember(m.id)}>
                                    <Trash2 size={18} />
                                </Button>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};