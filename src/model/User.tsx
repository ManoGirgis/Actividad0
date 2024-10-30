type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
};

type AuthResponse = {
  token: string;
  user: User;
};

const User: User = {
  id: "1",
  name: "Manuel",
  email: "",
  password: "",
  role: "admin",
  avatar: "",
  createdAt: "now",
  updatedAt: "now",
};

export { User, AuthResponse };
