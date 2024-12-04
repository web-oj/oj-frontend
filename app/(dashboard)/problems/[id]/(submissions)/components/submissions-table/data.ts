export const columns = [
    {
        name: "ID",
        uid: "id",
        sortable: true,
    },
    {
        name: "Submission Time",
        uid: "createdAt",
        sortable: true,
    },
    {
        name: "Status",
        uid: "status",
        sortable: false,
    }
]

export const statusOptions = [
    {
        name: "Accepted",
        uid: "accepted",
    },
    {
        name: "Error",
        uid: "error",
    }
]