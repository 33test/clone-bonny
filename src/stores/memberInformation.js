import { ref, computed } from "vue";
export const usersInformation = () => {
  const fetchInformation = async () => {
    try {
      const res = await fetch("http://localhost:3300/memberInformation");
      const data = await res.json();
      
    }
  }
}