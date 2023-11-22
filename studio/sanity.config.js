// sanity.config.js
import { defineConfig } from "sanity";
import { dashboardTool, projectUsersWidget, projectInfoWidget } from "@sanity/dashboard";
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import { deskTool } from "sanity/desk";
import schemas from "./schemas/schema";
import deskStructure from "./deskStructure";
import { Logo } from "./plugins/studio-logo/Logo";

export default defineConfig({
  title: "Fresh Air Production",
  projectId: "699p25ev",
  dataset: "production",
  plugins: [
    dashboardTool({
      widgets: [
        // documentListWidget({
        //   layout: { width: "full" },
        //   showCreateButton: true,
        //   limit: 5
        // }),
        netlifyWidget({
          title: "My Netlify deploys",
          layout: { width: "small" },
          sites: [
            {
              title: "Sanity Studio",
              apiId: "95c25589-c25a-4b95-937d-463f1c851417",
              buildHookId: "636a23978307d42a33d8d0ed",
              name: "fresh-air-production-studio"
            },
            {
              title: "Website",
              apiId: "adfc1430-1339-4906-a105-4044baf3f9d5",
              buildHookId: "636a2397d0a90e1b7ebcc81f",
              name: "fresh-air-production",
              url: "https://my-sanity-deployment.com"
            }
          ],
          data: [
            {
              title: "GitHub repo",
              value: "https://github.com/tomwrankmore/Fresh-Air-Production",
              category: "Code"
            },
            {
              title: "Frontend",
              value: "https://fresh-air-production.netlify.app",
              category: "apps"
            }
          ]
        }),
        projectUsersWidget(),
        projectInfoWidget()
      ]
    }),
    deskTool({
      structure: deskStructure
    })
  ],
  schema: {
    types: schemas
  },
  studio: {
    components: {
      logo: Logo
    }
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId != 'siteSettings')
      }
      return prev
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === 'siteSettings') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      return prev
    },
  },

});
