sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/library"
], (Controller, JSONModel, mobileLibrary) => {
    "use strict";

    const URLHelper = mobileLibrary.URLHelper;

    return Controller.extend("zportfolio.controller.Home", {
        onInit() {
            const oSkillsModel = new JSONModel({
                skills: [
                    {
                        icon: "sap-icon://syntax",
                        title: "SAP UI5 SDK",
                        description: "XML Views, JS Controllers, Routing, Fragments, Models, jQuery, AJAX, Node.js"
                    },
                    {
                        icon: "sap-icon://grid",
                        title: "SAP Fiori Elements",
                        description: "List Report, Analytical List Page, Overview Page, Worklist, XML & CDS Annotations"
                    },
                    {
                        icon: "sap-icon://connected",
                        title: "OData & REST APIs",
                        description: "OData V2/V4, REST & JSON APIs, Gateway, RAP/CAP Services, Non-SAP Backend"
                    },
                    {
                        icon: "sap-icon://cloud",
                        title: "SAP BTP Cloud",
                        description: "SAP BAS, CloudFoundry, SAP Build WorkZone, Cloud Identity Services, HANA Cloud"
                    },
                    {
                        icon: "sap-icon://settings",
                        title: "SAP Fiori Administration",
                        description: "Tiles, Catalogs, Spaces & Pages, Roles, Standard S4HANA & BI/BW App Activations"
                    },
                    {
                        icon: "sap-icon://source-code",
                        title: "Programming Languages",
                        description: "JavaScript (ES6+), Python, Java, C/C++, SQL Server, PHP, HTML, CSS"
                    }
                ]
            });
            this.getView().setModel(oSkillsModel, "skills");
        },

        onDownloadCV() {
            const sUrl = sap.ui.require.toUrl("zportfolio/assets/Arijit_CV_Dec_2025.pdf");
            URLHelper.redirect(sUrl, true);
        },

        onContactMe() {
            const oFooter = this.byId("footerSection");
            if (oFooter && oFooter.getDomRef()) {
                oFooter.getDomRef().scrollIntoView({ behavior: "smooth" });
            }
        },

        onEmailPress() {
            URLHelper.redirect("mailto:arijit99aj@gmail.com");
        },

        onLinkedInPress() {
            URLHelper.redirect("https://linkedin.com/in/arijit-dhar-7b1700152", true);
        }
    });
});
