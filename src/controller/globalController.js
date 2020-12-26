import Tools from "../model/Tools";

const homeController = (req, res) => {
    res.render("screens/home");
};

const ToolsController = async (req, res) => {
    const ToolsList = await Tools.find({}, {});

    console.log(ToolsList);

    res.render("screens/Tools", { ToolsList });
};

const globalController = {
    homeController,
    ToolsController,
};

export default globalController;