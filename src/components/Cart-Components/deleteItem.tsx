import axios from "axios";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { refetchStore } from "../refetch-store";

const DeleteItem = ({ productId }: { productId: string }) => {
  const { refetch } = refetchStore();

  const handleDelete = async function () {
    const response = await axios.delete("/api/cart",{
        data: { productId },
    });
    refetch();
  };
  return (
    <Button variant={"ghost"} className="size-8" onClick={handleDelete}>
      <Trash />
    </Button>
  );
};
export default DeleteItem;
