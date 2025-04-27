
export default async function Copy(text: string) {
     try {
       await navigator.clipboard.writeText(text);
       alert("Copy successful!");
     } catch (error) {
       alert("Copy failed!");
     }
   }