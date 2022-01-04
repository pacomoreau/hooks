## Démarrer le projet

`yarn start`

> [http://localhost:3000](http://localhost:3000)

## Hooks (react)

- useState
- useRef
- useEffect
- useMemo
- useCallback

## Autres hooks

- useContext, useReducer (react)
- useLocation, useHistory, useParams (react-router)
- useQuery, useMutation (react-query)

## Custom hooks

Un hook qui fait appels à d'autres hooks (custom ou non).  
Quelques exemples :  

- useOutsideClick
```
useOutsideClick(wrapperRef, callback)
```
- useGetCategories
```
const { data, loading } = useGetCategories(params)
```
- useView
```
  const params = {
    page: { type: "int", default: 1 },
    pageSize: { type: "int", default: 50 },
    q: { type: "string", filter: "search" },
    // ...
  }
  const {
    apiParams,
    componentParams,
    onPageChange,
    onPageSizeChange,
    onSortChange,
  } = useView(params, setPageSize)
  const { data, count, pages, loading } = useGetCategories(apiParams)

  // on a maintenant tout ce qu'il faut pour afficher une table triable et filtrable avec pagination : 
  // data, count, pages, loading
  // onPageChange, onPageSizeChange, onSortChange
```

## Tests

```
import { renderHook } from "@testing-library/react-hooks"
import { useGetCategories } from "hooks"

describe("useGetCategories", () => {
  it("should successfully return 3 categories after loading", async () => {
    const { result, waitFor } = renderHook(() => useGetCategories())

    expect(result.current.isLoading).toBe(true)

    await waitFor(() => result.current.isLoading === false)

    expect(result.current.isLoading).toBe(false)
    expect(result.current.data).toBeTruthy()
    expect(result.current.data?.length).toBe(3)
  })
})
```

## Avantages

- permet de factoriser certains comportements de manière éléguante
- factorisation qui permet d'avoir des composants plus lisibles
- peuvent servir à des fonctions métiers (appels API avec retraitement des données par ex.) mais aussi des fonctions utilitaires (changer le thème, créer une fonction de debounce ...)
- ils permettent aussi d'éviter l'utilisation de certaines props (history par ex.), ce qui rend les composants mois dépendants de leur position dans l'arbre des composants
- testables

## Liens

- [Introduction aux hooks](https://fr.reactjs.org/docs/hooks-intro.html)
- [Understanding re-rendering and memoization in React](https://engineering.udacity.com/understanding-re-rendering-and-memoization-in-react-13e8c024c2b4)
- [React Hook Pitfalls - Kent C. Dodds](https://www.youtube.com/watch?v=VIRcX2X7EUk&feature=youtu.be)
- [How to Compare Objects in JavaScript](https://dmitripavlutin.com/how-to-compare-objects-in-javascript/)
- [React Hooks YT Playlist](https://www.youtube.com/watch?v=O6P86uwfdR0&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h)
- [React Custom Hooks YT Playlist](https://www.youtube.com/watch?v=0c6znExIqRw&list=PLZlA0Gpn_vH-aEDXnaFNLsqiJWFpIWV03)
