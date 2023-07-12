const Component = () => {
    const [repos, setRepos] = useState([])
    
    useEffect(() => {
        
    }, [])

    const data = fetch('https://api.pexels.com/v1/collections/featured?per_page=1')
                     .then(response => response.json())
                     .then(data => setRepos(data))

    console.log(data)
    console.log(repos)

    return (
        <div>
        {
            repos.map(items => console.log(items))
        }
        </div>
    )
}