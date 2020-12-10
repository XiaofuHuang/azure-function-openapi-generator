import { OperationURLParameter } from "@azure/core-http";

export const $host: OperationURLParameter = {
    parameterPath: "$host",
    mapper: {
        serializedName: "$host",
        required: true,
        type: {
            name: "String"
        }
    },
    skipEncoding: true
};

export const userId: OperationURLParameter = {
    parameterPath: "userId",
    mapper: {
        serializedName: "userId",
        required: true,
        type: {
            name: "Number"
        }
    }
};
