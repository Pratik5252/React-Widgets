import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
const DetailsWidget = () => {
  return (
    <div className="mt-4 w-full">
      <Tabs defaultValue="about">
        <TabsList className="">
          <TabsTrigger value="about">About me</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="recommeded">Recommeded</TabsTrigger>
        </TabsList>
        <div>
          <TabsContent value="about">
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now. I was born and
            raised in Albany, NY& have been living in Santa Carla for the past
            10 years my wife Tiffany and my 4 year old twin daughters- Emma and
            Ella. Both of them are just starting school, so my calender is
            usually blocked between 9-10 AM. This is a...
          </TabsContent>
          <TabsContent value="experience" className="">
            I've been in sales for over a decade, with the last 3 years at
            Salesforce being the highlight of my career. My experience spans
            across various industries, including tech, finance, and healthcare.
            I've consistently exceeded sales targets, with a 120% average quota
            attainment over the past 5 years. I specialize in enterprise-level
            solutions and have a track record of closing multi-million dollar
            deals. My approach combines deep product knowledge with a keen
            understanding of client needs. I've also mentored junior sales reps
            and contributed to improving our sales processes. Prior to
            Salesforce, I worked at Oracle for 5 years, where I honed my skills
            in CRM and cloud-based solutions. My diverse experience allows me to
            provide valuable insights to clients across different sectors.
          </TabsContent>
          <TabsContent value="recommeded">
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now. I was born and
            raised in Albany, NY& have been living in Santa Carla for the past
            10 years my wife Tiffany and my 4 year old twin daughters- Emma and
            Ella. Both of them are just starting school, so my calender is
            usually blocked between 9-10 AM. This is a...
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default DetailsWidget;
