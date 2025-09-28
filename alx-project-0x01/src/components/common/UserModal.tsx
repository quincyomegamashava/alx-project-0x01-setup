import { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: { street: "", suite: "", city: "", zipcode: "", geo: { lat: "", lng: "" } },
    company: { name: "", catchPhrase: "", bs: "" }
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 shadow-xl w-full max-w-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Add New User</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input name="name" value={user.name} onChange={handleChange} placeholder="Name" className="border rounded-lg px-3 py-2" />
            <input name="username" value={user.username} onChange={handleChange} placeholder="Username" className="border rounded-lg px-3 py-2" />
            <input name="email" value={user.email} onChange={handleChange} placeholder="Email" className="border rounded-lg px-3 py-2" />
            <input name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" className="border rounded-lg px-3 py-2" />
            <input name="website" value={user.website} onChange={handleChange} placeholder="Website" className="border rounded-lg px-3 py-2" />
          </div>
          <div className="flex items-center justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
