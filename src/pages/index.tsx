import type { NextPage } from "next";
import List from "../ui/components/List/List";
import Title from "../ui/components/Title/Title";

const Home: NextPage = () => {
  return (
    <div>
      <Title
        title=""
        subtitle={
          <span>
            Com um pequeno valor mensal, você
            <br />
            porde <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />
      <List
        pets={[
          {
            id: 1,
            name: "LILI",
            history:
              "Lorem ipsum dolor sit amet consectetur , Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturadipisicing elit. Deleniti neque laborum aut rerum voluptatem eum repudiandae dolores ipsa maxime! Deserunt reprehenderit et ipsam non placeat est commodi molestias corporis numquam!",
            photo: "/images/dogs/dog1.jpg",
          },
          {
            id: 2,
            name: "BABY",
            history:
              "222 Lorem ipsum Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturdolor sit amet consectetur adipisicing elit. Deleniti neque laborum aut rerum voluptatem eum repudiandae dolores ipsa maxime! Deserunt reprehenderit et ipsam non placeat est commodi molestias corporis numquam!",
            photo: "/images/dogs/dog2.jpg",
          },
        ]}
      />
    </div>
  );
};

export default Home;
