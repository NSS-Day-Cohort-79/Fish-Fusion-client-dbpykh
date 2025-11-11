``` mermaid
sequenceDiagram

participant main
participant restaurant
participant fishMonger
participant fishingBoat

main ->> restaurant: get fishMenu(dailyPriceLimit)

restaurant ->> fishMonger: get mongerInventory(dailyPriceLimit)

fishMonger ->> fishingBoat: get boatInventory
fishingBoat -->> fishMonger: return array of boat inventory

loop loop boatInventory
note over fishMonger: filter boatInventory for fish amount >= 10, price <= 7.50
loop
note over fishMonger: filter boatInventory for fish price <= dailyPriceLimit
end
end

fishMonger -->> restaurant: return array monger inventory

loop loop mongerInventory
note over restaurant: for fish in mongerInventory, created menu (html string)
end

restaurant -->> main: return html string of menu
note over main: console log menu
```