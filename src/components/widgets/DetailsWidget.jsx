import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
const DetailsWidget = () => {
  return (
    <div className="mt-4 w-full">
      <Tabs defaultValue="about">
        <TabsList className="">
          <TabsTrigger value="about">About me</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
        </TabsList>
        <div>
          <TabsContent value="about">
            Hello! I&apos;m Dave, your sales rep here from Salesforce. I&apos;ve
            been working at this awesome company for 3 years now. I was born and
            raised in Albany, NY& have been living in Santa Carla for the past
            10 years my wife Tiffany and my 4 year old twin daughters- Emma and
            Ella. Both of them are just starting school, so my calender is
            usually blocked between 9-10 AM. This is a...
          </TabsContent>
          <TabsContent value="experience" className="">
            Over a decade in sales, with 3 years at Salesforce and 5 years at
            Oracle prior to that. I have expertise in enterprise-level
            solutions, consistently exceeding targets by 20% year-over-year. At
            Oracle, I specialized in CRM and cloud solutions, managing a
            portfolio of Fortune 500 clients. My time at Salesforce has further
            honed my skills in SaaS sales, particularly in the areas of
            AI-driven CRM tools and custom enterprise solutions. I&apos;ve also
            led several successful cross-functional projects, improving our
            sales processes and boosting team performance by 30%.
          </TabsContent>
          <TabsContent value="recommended">
            1. Salesforce CRM implementation and optimization 2. Enterprise
            cloud solutions 3. Sales process improvement 4. Industry-specific
            Salesforce products 5. Team training and mentorship 6. Strategies
            for high-value deals 7. CRM integration with existing systems 8. AI
            and machine learning applications in CRM 9. Data analytics and
            business intelligence 10. Customer success and retention strategies
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default DetailsWidget;
