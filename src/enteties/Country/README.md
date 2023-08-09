## Country entity

----

This entity have enumeration of countries you can use for displaying like list

### Enum values

- `POLAND`: Represents the country Poland.
- `UKRAINE`: Represents the country Ukraine.

----

``` tsx
<select>
    {Object.values(COUNTRIES).map((item) => (
        item !== values.country &&
            <option key={item} value={item}>
                {item}
            </option>
    ))}
</select>
```
