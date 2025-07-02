"use client";

// creating my app state context here
import React, { createContext, useState, useContext, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const reloadTasks = () => {
    fetchTasks();
  };

  const value = {
    user,
    setUser,
    tasks,
    setTasks,
    allUsers,
    setAllUsers,
    loading,
    reloadTasks,
  };

  useEffect(() => {
    // Fetch all users when the component mounts
    fetchAllUsers();
    fetchTasks();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/users"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setAllUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "api/tasks"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
