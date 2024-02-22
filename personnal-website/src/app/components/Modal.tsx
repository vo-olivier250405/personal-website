import Image from "next/image";

export const Modal = ({
  product,
  closeModal,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  closeModal: () => void;
}) => {
  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-70 z-[9999]">
      <div className="bg-white p-8 rounded-md relative z-[10000]">
        <button
          className="absolute top-4 right-4 bg-gray-700 p-4 rounded-md text-gray-500 hover:text-gray-200"
          onClick={closeModal}
        >
          Close
        </button>
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover mb-4 rounded-md"
          alt={product.title}
        />
        <h2 className="text-2xl font-bold text-black">{product.title}</h2>

        {["Moissan Fighter", "Python Financial DashBoard"].includes(
          product.title
        ) && (
          <a
            href={product.link}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
};
