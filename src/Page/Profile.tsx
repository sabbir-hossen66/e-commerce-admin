const Profile = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Profile</h1>
      <textarea
        placeholder="Write something about your profile..."
        className="w-full mt-4 p-2 border rounded text-black"
        rows={5}
      />
    </div>
  );
};

export default Profile;
