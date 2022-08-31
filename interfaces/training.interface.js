export const Training = {
  id: "",
  name: "",
  trainerName: "",
  link: "",
  groupCode: "",
  startDate: "",
  endDate: "",
  dates: [],
  campaing: ""
};

export const VModelTrainingStore = [
  {
    property: "id",
    oneKey: "editedTraining",
    twoKey: "id",
    defaultValue: "",
    type: "String"
  },
  {
    property: "name",
    oneKey: "editedTraining",
    twoKey: "name",
    defaultValue: "",
    type: "String",
    upper: true
  },
  {
    property: "trainerName",
    oneKey: "editedTraining",
    twoKey: "trainerName",
    defaultValue: "",
    type: "String",
    upper: true
  },
  {
    property: "link",
    oneKey: "editedTraining",
    twoKey: "link",
    defaultValue: "",
    upper: true,
    type: "String"
  },
  {
    property: "groupCode",
    oneKey: "editedTraining",
    twoKey: "groupCode",
    defaultValue: "",
    type: "String",
    upper: true
  },
  {
    property: "startDate",
    oneKey: "editedTraining",
    twoKey: "startDate",
    defaultValue: "",
    type: "String"
  },
  {
    property: "endDate",
    oneKey: "editedTraining",
    twoKey: "endDate",
    defaultValue: "",
    type: "String"
  },
  {
    property: "dates",
    oneKey: "editedTraining",
    twoKey: "dates",
    defaultValue: Training.dates
  },
  {
    property: "campaing",
    oneKey: "editedTraining",
    twoKey: "campaing",
    defaultValue: "",
    type: "String"
  }
];
