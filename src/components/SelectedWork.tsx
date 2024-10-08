import React from "react";
import WorkCard from "./WorkCard";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Tags } from "../utils/SelectedWorkTags";

import "./SelectedWork.css";

const SelectedWork = () => {
  const projects = [
    {
      title: "Enterprise dashboard MVP",
      description:
        "Designed an easy to use ExpressVPN B2B admin panel as an MVP while navigating ambiguities and tight timelines.",
      tags: [Tags.UX],
      image_path:
        "https://github.com/kateyibozhou/react-portfolio/blob/main/src/assets/images/showcase/dashboard.png?raw=true",
      path: "/case-study/evpn-enterprise-dashboard",
      content_color: "#001D2F",
    },
    {
      title: "Increase ExpressVPN user renewal rate by 83%",
      description:
        "Increased renewal revenue by 83% within 7 days of testing by triangulating multiple points of data to provide a user friendly design recommendation.",
      tags: [Tags.UX, Tags.growth],
      image_path:
        "https://github.com/kateyibozhou/react-portfolio/blob/main/src/assets/images/showcase/renewal.png?raw=true",
      path: "/case-study/evpn-increase-user-renewal-rate",
      content_color: "#37383A",
    },
    {
      title: "Optimise ExpressVPN checkout page for mobile",
      description:
        "Created 8% uplift in average order value (AOV) of the Regular mobile checkout page design by understanding the user journey.",
      tags: [Tags.UX, Tags.growth],
      image_path:
        "https://github.com/kateyibozhou/react-portfolio/blob/main/src/assets/images/showcase/evpn-checkout.png?raw=true",
      path: "/case-study/evpn-mobile-conversion",
      content_color: "#001D2F",
    },
    {
      title: "Shell mobile app APAC localisation",
      description:
        "Collaborated with user researchers to adapt Shell App for local markets and introduced a new payment model to users.",
      tags: [Tags.UX],
      image_path:
        "https://github.com/kateyibozhou/react-portfolio/blob/main/src/assets/images/showcase/shell.png?raw=true",
      path: "/case-study/shell-apac",
      content_color: "#FDE67D",
    },
    {
      title: "SK-II Festive Packaging 2016",
      description:
        "Delivered packaging design from concept sketch to artwork handoff for global launch of SK-II festive edition.",
      tags: [Tags.packaging],
      image_path:
        "https://github.com/kateyibozhou/react-portfolio/blob/yirui/style-landing-page/src/assets/images/showcase/SK-II.jpeg?raw=true",
      path: "/case-study/skii",
      content_color: "#FFFFFF",
    },
    {
      title: "Information architecture design",
      description:
        "Created a new information architecture for DBS bank to house all Treasury and Markets content in one place.",
      tags: [Tags.UX],
      image_path:
        "https://github.com/kateyibozhou/react-portfolio/blob/yirui/style-landing-page/src/assets/images/showcase/information_architecture.png?raw=true",
      path: "/case-study/dbs-info-arch",
      content_color: "#001D2F",
    },
    {
      title: "Evangelise using customer journey maps",
      description:
        "Improve work efficiency and understanding of customer experiences through building a single source of truth.",
      tags: [Tags.SD],
      image_path:
        "https://github.com/kateyibozhou/react-portfolio/blob/main/src/assets/images/showcase/evangelise.png?raw=true",
      path: "/case-study/evpn-evangelise-customer-journey-maps",
      content_color: "#001D2F",
    },
    {
      title: "Philips B2B GTM launch campaign",
      description:
        "Designed a workshop to develop an omni-channel campaign strategy to help Philips Air purifier enter into 2 new B2B markets.",
      tags: [Tags.strategy, Tags.SD],
      image_path:
        "https://github.com/kateyibozhou/react-portfolio/blob/main/src/assets/images/showcase/philips.png?raw=true",
      path: "/case-study/philips-gtm",
      content_color: "#001D2F",
    },
  ];

  return (
    <section className="selected-work">
      <div className="title" data-aos="fade-right">
        Selected work
      </div>
      <div className="work-cards" data-aos="fade-left">
        {projects.map((project, id) => (
          <WorkCard
            title={project.title}
            description={project.description}
            tags={project.tags}
            path={project.path}
            image_path={project.image_path}
            content_color={project.content_color}
          />
        ))}
      </div>
      <a href="/react-portfolio/#/projects" className="all-projects" data-aos="fade-up">
        all projects <ArrowRightOutlined />
      </a>
    </section>
  );
};

export default SelectedWork;
