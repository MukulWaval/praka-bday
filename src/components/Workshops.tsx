import React from "react";

const Workshops: React.FC = () => {
  return (
    <div className="card bg-base-200 p-4 sm:p-1 md:p-2">
      <div className="card-body">
        <h1 className="card-title text-2xl sm:text-3xl mb-4">Workshops</h1>
        <div className="flex flex-col justify-center items-center">
          <img
            className="h-auto max-w-full lg:max-w-lg rounded-lg"
            src="https://scontent.fpnq13-3.fna.fbcdn.net/v/t39.30808-6/472934061_592757493677952_9141159694093146534_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AOS8UlfZmxAQ7kNvgEXjGA1&_nc_zt=23&_nc_ht=scontent.fpnq13-3.fna&_nc_gid=AgkVnXz7gdVd7L8j4JzS9CM&oh=00_AYDLJmNhrYaZJKFWzsiTqYUjjLJBJ3VuVkpKxR1qVwyPmw&oe=679C4DCD"
            alt="image description"
          />
          <img
            className="h-auto max-w-full mt-10 lg:max-w-lg rounded-lg"
            src="https://scontent.fpnq13-5.fna.fbcdn.net/v/t39.30808-6/313034126_5761947460514716_8913322305098656784_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=669761&_nc_ohc=GrlXyp0kD7MQ7kNvgFB-5Hk&_nc_zt=23&_nc_ht=scontent.fpnq13-5.fna&_nc_gid=A7HQPO2i4F4wk5kgq6ucsGL&oh=00_AYB7IrzcdRJJEAzolsMKXJn1SbFLLDa9fHpOJjxwwwUeMg&oe=679C509F"
            alt="image description"
          />
        </div>
      </div>
    </div>
  );
};

export default Workshops;
