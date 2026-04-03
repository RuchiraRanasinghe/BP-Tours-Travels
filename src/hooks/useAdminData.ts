import { useEffect, useState } from "react";
import { readAdminData, subscribeAdminData, type AdminData } from "@/lib/adminStore";

export const useAdminData = () => {
  const [data, setData] = useState<AdminData>(() => readAdminData());

  useEffect(() => {
    const unsubscribe = subscribeAdminData(() => {
      setData(readAdminData());
    });

    const onStorage = (event: StorageEvent) => {
      if (event.key === "bp_tours_admin_data_v1") {
        setData(readAdminData());
      }
    };

    window.addEventListener("storage", onStorage);
    return () => {
      unsubscribe();
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return data;
};
