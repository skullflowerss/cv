import {
  ExperienceList,
  Layout,
  List,
  ProfileContent,
  ProjectsList,
} from "@/components";
import { fetchEntries } from "@/utils/contentfulFetch";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const AboutPage = ({ newData }) => {
  const image = newData.img;
  const { experience, projects, bio, name, age } = newData;
  console.log(newData);

  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.gif" />
      </Head>
      <Layout>
        <div className="profileContainer">
          <div className="profileSection first">
            <Image
              src={"https:" + image.fields.file.url}
              alt="hello"
              width={100}
              height={100}
              className="profilePic"
              priority={true}
              style={{
                width: "340px",
                height: "auto",
              }}
            />
            <ProfileContent {...newData} />
          </div>
          <div className="profileSection second">
            <div className="profileBox ">
              <List elements={experience} />
              <List elements={projects} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutPage;

export async function getStaticProps() {
  const data = await fetchEntries();
  const newData = data.items[0].fields;
  return {
    props: {
      newData,
    },
  };
}
