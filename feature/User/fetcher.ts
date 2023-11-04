type User = { id: number; name: string; isAuthenticated: boolean };

const demoUser: User[] = [
  { id: 1, name: "John", isAuthenticated: true },
  { id: 2, name: "Jane", isAuthenticated: false },
  { id: 3, name: "Jack", isAuthenticated: true },
];

export const fetchUser = async (userId: number) => {
  const user = await new Promise<User>((resolve, reject) => {
    setTimeout(() => {
      const result = demoUser.find((user) => user.id === userId);
      if (result) {
        resolve(result);
      } else {
        reject(new Error("User not found"));
      }
    }, 1000);
  });

  return {
    user,
  };
};
