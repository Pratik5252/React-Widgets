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
          <TabsContent value="experience">
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now. I was born and
            raised in Albany, NY& have been living in Santa Carla for the past
            10 years my wife Tiffany and my 4 year old twin daughters- Emma and
            Ella. Both of them are just starting school, so my calender is
            usually blocked between 9-10 AM. This is a...
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
