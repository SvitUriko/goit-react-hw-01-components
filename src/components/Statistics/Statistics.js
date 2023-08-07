import PropTypes from 'prop-types';
import { Element, Label, List, Percentage, Section, Title } from "./Statistics.styled"

export const Statistics = ({title, stats}) => {
    return (
        <Section>
            {title && <Title>{title}</Title> }

            <List>
                {stats.map( data => (
                    <Element key={data.id} label={data.label}>
                        <Label>{data.label}</Label>
                        <Percentage>{data.percentage}</Percentage>
                    </Element>
                    ))}
            </List>
        </Section>)
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
};