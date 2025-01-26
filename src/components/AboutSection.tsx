import React from "react";

const AboutSection: React.FC = () => {
  return (
    <div className="card bg-base-100 p-4 sm:p-1 md:p-2">
      <div className="card-body">
        <h1 className="card-title text-2xl sm:text-3xl mb-4">About Me</h1>
        <p className="lg:text-xl">
          I am Prasad Manerikar, a writer and an educationist. With more than 20
          years of experience in working with children, teachers, and parents, I
          have made significant contributions to enriching alternative education
          systems. My work primarily focuses on brain-based learning, cognitive
          science, and the theory of multiple intelligences.
        </p>
        <p className="lg:text-xl">
          I began my journey with the organization Gram-Mangal, where I had the
          opportunity to teach and promote "Constructivism" (रचनावाद) to
          numerous institutions, teachers, and parents. Later, I co-founded a
          community-based open learning center Anubhutee . A few years back
          started my own alternative learning center by the name Cohum –
          Conscious Human Education Foundation Pune.
        </p>
        <p className="lg:text-xl">
          At Cohum, we design and implement innovative, creativity- driven, and
          experiential education methods tailored to meet the needs of the 21st
          century. The children at Cohum learn through these unique approaches.
        </p>
        <p className="lg:text-xl">
          In addition to this, I regularly write about education and related
          topics in various newspapers and magazines. I have authored many
          childrens books. I also conduct workshops for children and parents
          under the name Mindful Teens, promoting mindfulness and thoughtful
          engagement in learning.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
