import Image from "next/image";
import Link from "next/link";

const Box = () => {
  const items = [
    {
      id: 1,
      title: "Boxgo-Nền tảng quản lý kho chuyên nghiệp",
    },
    {
      id: 2,
      title: "Kiva-Tham vọng chuyển đổi số ngành môi giới",
    },
    {
      id: 3,
      title: "Website thương mai điện tử-Summer21",
    },
    {
      id: 4,
      title: "E-learning - Nền tảng đào tạo nội bộ",
    },
    {
      id: 5,
      title: "TOI 3D Customize E-commerce",
    },
  ];
  return (
    <div className="flex flex-wrap w-2/3 mt-10 gap-6">
      {items.map((item) => (
        <div className=" cursor-pointer
            hover:-translate-y-2 transition-all

        ">
          <Link href={`/product/${item.id}`}>
            <div className="bg-white rounded-lg shadow-lg relative">
              <Image
                src={`/assets/image-${item.id}.png`}
                width="400"
                height="400"
                alt={item.id}
              />
              <div className="bg-white rounded-lg absolute bottom-0 left-0 right-0 shadow-lg p-4 m-4 text-center w-[calc(100%)-32px] ">
                <h6 className="font-semibold">{item.title}</h6>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Box;
