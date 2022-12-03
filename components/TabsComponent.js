import { useState, useCallback, useEffect } from "react";

import Container from "./container";
import ChoosePlanSection from "./docs/ChoosePlanSection";
import LinkYourProjectSection from "./docs/LinkYourProjectSection";
import EmailingBackersSection from "./docs/EmailingBackersSection";
import RewardsAndAddonsSection from "./docs/RewardsAndAddonsSection";
import AddSingleBackerSection from "./docs/AddSingleBackerSection";
import UpsellsSection from "./docs/UpsellsSection";
import CustomizationsSection from "./docs/CustomizationsSection";
import TemplateSection from "./docs/TemplateSection";

export default function TabsComponent ({ tab }) {
    const [tabs, setTabs] = useState([{
        id: "choose-a-plan",
        title: "Choose a plan",
        active: false,
        component: <ChoosePlanSection />
    }, {
        id: "link-your-project",
        title: "Import Pledges - Connect A Project",
        active: false,
        component: <LinkYourProjectSection />
    }, {
        id: "emailing-backers",
        title: "Emailing Backers",
        active: false,
        component: <EmailingBackersSection />
    }, {
        id: "rewards-and-addons",
        title: "Rewards & Add-ons",
        active: false,
        component: <RewardsAndAddonsSection />
    }, {
        id: "add-backer",
        title: "Add Single Backer - Manually Adding Backers",
        active: false,
        component: <AddSingleBackerSection />
    }, {
        id: "upsells",
        title: "Upsells",
        active: false,
        component: <UpsellsSection />
    }, {
        id: "customizations",
        title: "Customizations",
        active: false,
        component: <CustomizationsSection />
    }, {
        id: "template",
        title: "Template",
        active: false,
        component: <TemplateSection />
    }, {
        id: "preview-survey",
        title: "Preview Survey - View Surveys Before Launching",
        active: false,
        // component: <PreviewSurveySection />
    }, {
        id: "email-frequency",
        title: "Survey Email Frequency",
        active: false,
        // component: <EmailFrequencySection />
    }, {
        id: "survey-discount",
        title: "How The Survey Discount Works",
        active: false,
        // component: <SurveyDiscountSection />
    }, {
        id: "launch-survey",
        title: "Launch - Start Sending Surveys",
        active: false,
        // component: <LaunchSurveySection />
    }]);

    useEffect(
        () => {
            const values = tabs.map(t => ({
                ...t,
                active: tab === t.id
            }));
            setTabs(values);
        }, []
    )

    const handleClick = useCallback(
        (evt) => {
            const values = tabs.map(t => ({
                ...t,
                active: evt.target.id === t.id
            }));
            setTabs(values);
        }, []
    )

    return (
        <Container className="flex flex-wrap xl:w-10/12 sm:w-full">
            <div className="flex items-start">
                <ul 
                className="nav nav-tabs flex flex-col flex-wrap list-none border-b-0 pl-0 mr-4" 
                id="tabs-tabVertical"
                role="tablist">
                    {tabs.map(t => {
                        return (
                            <li 
                            className="nav-item flex-grow text-left" 
                            role="presentation"
                            key={`key-${t.id}`}
                            >
                                <a 
                                onClick={handleClick}
                                className="
                                  nav-link
                                  block
                                  font-medium
                                  text-xs
                                  leading-tight
                                  border-x-0 border-t-0 border-b-2 border-transparent
                                  px-4
                                  py-2
                                  w-72
                                  hover:border-transparent 
                                  hover:bg-gray-100
                                  focus:border-transparent
                                  cursor-pointer
                                "
                                id={t.id}
                                data-bs-toggle="pill" 
                                data-bs-target={`#tabs-${t.id}`} 
                                role="tab"
                                aria-controls={`tabs-${t.id}`}>
                                    {t.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className="tab-content" id="tabs-tabContentVertical">
                    {tabs.map(t => {
                        return (
                            <>
                                {t.active ? (
                                    <div 
                                    className={`tab-pane fade show active`}
                                    id={`tabs-${t.id}`}
                                    role="tabpanel"
                                    aria-labelledby={`tabs-home-${t.id}`}>
                                        {t.component || t.title}
                                    </div>
                                ) : null}
                            </>
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}