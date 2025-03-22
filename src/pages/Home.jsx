import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import Loader from '../components/Loader/Loader';
import CountryList from '../components/CountryList/CountryList';
import { getCountries } from '../service/countryApi';
import Heading from '../components/Heading/Heading';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && (
          <Heading title="Opps! There is an error occured, try to reload the page" />
        )}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
export default Home;
