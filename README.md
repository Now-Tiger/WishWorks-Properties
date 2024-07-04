# WishWorks Solution Private Limited: Backend Eng. Assessment Solution

---

**FastAPI/NodeJS + PostgreSQL** Additional points will be awarded to candidates who do the assignment in both FastAPI and NodeJS

web application for a real estate management system that has several properties added to the system with each property belonging to a locality.

---

#### design the database structure and create the following APIs:

1. **add_new_property**

   **Input**: property_name, locality, owner_name

   **Output**: Confirmation that the property has been added along with its newly generated property ID

---

2. **Fetch_all_properties**

   **Input:** locality_name or locality_id

   **Output**: a list of all the properties that belong to the given locality. For each property show property_id, property_name, Owner_name

---

3. **update_property_details**

   **Input**: property_id, locality_id, owner_name

   **Output**: Confirmation that the property has been updated along with all its details

---

4. **delete_property_record**

   **Input**: property_id

   **Output**: a success message indicating that the has been deleted.

---

**Properties DB**

_features -_

property_id,

property_name,

property_owner(owner name),

---

**GET: ../api/v1/properties**

**Request Body** - { locality_name: "vishrant wadi", or locality_id: 3 }

---

```json
{
  "properties": [
    {
      "property_id": 1,
      "property_name": "Apartment",
      "property_owner": "John Doe"
    },
    {
      "property_id": 2,
      "property_name": "Land",
      "property_owner": "John Doe"
    },
    {
      "property_id": 3,
      "property_name": "Building",
      "property_owner": "John Doe"
    }
  ]
}
```

```

```
