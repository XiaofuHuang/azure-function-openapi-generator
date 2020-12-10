import * as coreHttp from "@azure/core-http";

export const User: coreHttp.CompositeMapper = {
    type: {
        name: "Composite",
        className: "User",
        modelProperties: {
            id: {
                serializedName: "id",
                required: true,
                type: {
                    name: "Number"
                }
            },
            email: {
                serializedName: "email",
                required: true,
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            status: {
                serializedName: "status",
                type: {
                    name: "String"
                }
            },
            phoneNumbers: {
                serializedName: "phoneNumbers",
                required: true,
                type: {
                    name: "Sequence",
                    element: { type: { name: "String" } }
                }
            }
        }
    }
};
