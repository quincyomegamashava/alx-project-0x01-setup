import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, address, company, id }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <span className="text-sm text-gray-500">ID: {id}</span>
      </div>
      <p className="text-gray-600 mb-1">@{username}</p>
      <p className="text-gray-700 mb-3">
        <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a> · {phone}
      </p>
      <p className="text-gray-700 mb-3">
        <a href={`https://${website}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">{website}</a>
      </p>
      <div className="text-sm text-gray-600 space-y-1">
        <p><span className="font-medium">Company:</span> {company?.name}</p>
        <p><span className="font-medium">Catch phrase:</span> {company?.catchPhrase}</p>
        <p><span className="font-medium">Address:</span> {address?.suite}, {address?.street}, {address?.city} {address?.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;
